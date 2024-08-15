const query = {
  heroImage: `query MyQuery {
  heroImage(where: {id: "clzu22i5g7a0o07zlh4k2b0ye"}) {
    id
    judul
    deskripsi
    gambar {
      url
    }
  }
}`,
  sejarah: `query MyQuery {
  sejarah(where: {id: "clzu22i5g7a0o07zlh4k2b0ye"}) {
    id
    judul
    deskripsi
    gambar {
      url
    }
  }
}`,
};
