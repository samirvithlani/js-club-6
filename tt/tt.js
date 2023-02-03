var timeslots={

    days:[
        {
            day:"Monday",
            timeslots:[
                {
                    time:"9:00",
                    available:true
                },
                {
                    time:"9:30",
                    available:true
                }
            ]
        },
        {
            day:"Tuesday",
            timeslots:[
                {
                    time:"9:00",
                    available:false
                },
                {
                    time:"9:30",
                    available:true
                }
            ]
        },
        {
            day:"Wednesday",
            timeslots:[
                {
                    time:"9:00",
                    available:true
                },
                {
                    time:"9:30",
                    available:false
                }
            ]
        },
        {
            day:"Thursday",
            timeslots:[
                {
                    time:"9:00",
                    available:false
                },
                {
                    time:"9:30",
                    available:false
                }
            ]
        }
    ]
}

timeslots.days.map((tt)=>{
    tt.timeslots.map((ts)=>{
        
            console.log(tt.day+" "+ts.time+" is available")
        
    })
})