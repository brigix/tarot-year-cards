import StickyHeadTable from './StickyHeadTable';

const LifetimeTarotTable = (props: any) => {
  return (
    <div>
      <h6 color="secondary">Birthday: {props.birthday.toDateString()}</h6>
        <StickyHeadTable dataArray={props.timelineRecordsArr}  />
    </div>
  )
}

export default LifetimeTarotTable;