export class Tools {

  public static getDateAsYYYYMMDD(date: Date): string {
    const y = `${date.getFullYear()}`;
    const m = `${date.getMonth() + 1}`.padStart(2, '0');
    const d = `${date.getDate()}`.padStart(2, '0');
    return y + m + d;
}
