import LineChartComponent from './LineChartComponent'

const LifetimeTarotDiagram = (props: any) => {
  return (
    <div>Lifetime Tarot Diagram 
        <h6 color="secondary">Birthday: {props.birthday.toDateString()}</h6>
        <LineChartComponent dataArray={props.timelineRecordsArr}/>
    </div>
  )
}

export default LifetimeTarotDiagram