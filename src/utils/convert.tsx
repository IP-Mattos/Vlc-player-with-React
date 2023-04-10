function convert(numero: number) {
    const minutos = Math.floor(numero / 60)
    const segundos = numero % 60
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos
    return `${minutosFormateados}:${segundosFormateados}`
}

export default convert
