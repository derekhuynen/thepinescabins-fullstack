export default function Day({date, ...props} ){



    return(
        <div className={props.day} >
            <div className={props.styles} style={{height: props.boxSize, width: props.boxSize}}>
                {date ? date.getDate(): ""}
            </div>
        </div>

    )
}