interface TimelineRecordInterface  {
    id: number;
    title: string;
    year: number;
    age: number;
    comment?: string;
}
class TimelineRecord implements TimelineRecordInterface {
    id: number;
    title: string;
    year: number;
    age: number;
    comment?: string;
constructor (id: number, title: string, year: number, age: number, comment?: string)  {
    this.id = id;
    this.title = title;
    this.year = year;
    this.age = age;
    this.comment = comment;
} }

export default TimelineRecord;