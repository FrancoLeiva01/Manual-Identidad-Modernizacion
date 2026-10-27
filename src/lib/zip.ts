// Arma un .zip sin comprimir (modo "store") en el navegador, sin librerías.
// Alcanza de sobra para bajar unos pocos archivos de texto como el Kit UI.

export interface ArchivoZip {
  nombre: string; // ruta dentro del zip, ej: "ui/Boton.tsx"
  contenido: string;
}

const tablaCrc = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(datos: Uint8Array) {
  let c = 0xffffffff;
  for (const b of datos) c = tablaCrc[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

export function crearZip(archivos: ArchivoZip[]): Blob {
  const encoder = new TextEncoder();
  const partes: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  for (const a of archivos) {
    const nombre = encoder.encode(a.nombre);
    const datos = encoder.encode(a.contenido);
    const crc = crc32(datos);

    // Cabecera local (30 bytes + nombre)
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true); // versión necesaria
    local.setUint16(6, 0x0800, true); // nombres en UTF-8
    local.setUint32(14, crc, true);
    local.setUint32(18, datos.length, true);
    local.setUint32(22, datos.length, true);
    local.setUint16(26, nombre.length, true);
    partes.push(new Uint8Array(local.buffer), nombre, datos);

    // Entrada del directorio central (46 bytes + nombre)
    const entrada = new DataView(new ArrayBuffer(46));
    entrada.setUint32(0, 0x02014b50, true);
    entrada.setUint16(4, 20, true);
    entrada.setUint16(6, 20, true);
    entrada.setUint16(8, 0x0800, true);
    entrada.setUint32(16, crc, true);
    entrada.setUint32(20, datos.length, true);
    entrada.setUint32(24, datos.length, true);
    entrada.setUint16(28, nombre.length, true);
    entrada.setUint32(42, offset, true);
    central.push(new Uint8Array(entrada.buffer), nombre);

    offset += 30 + nombre.length + datos.length;
  }

  const tamanoCentral = central.reduce((t, p) => t + p.length, 0);

  // Fin del directorio central (22 bytes)
  const fin = new DataView(new ArrayBuffer(22));
  fin.setUint32(0, 0x06054b50, true);
  fin.setUint16(8, archivos.length, true);
  fin.setUint16(10, archivos.length, true);
  fin.setUint32(12, tamanoCentral, true);
  fin.setUint32(16, offset, true);

  return new Blob([...partes, ...central, new Uint8Array(fin.buffer)] as BlobPart[], {
    type: "application/zip",
  });
}

export function descargar(blob: Blob, nombreArchivo: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombreArchivo;
  a.click();
  URL.revokeObjectURL(url);
}
