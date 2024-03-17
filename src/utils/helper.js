export const numberFormat = (number) => {
    const formatNumbering = new Intl.NumberFormat('id-Id');

    return formatNumbering.format(number);
}