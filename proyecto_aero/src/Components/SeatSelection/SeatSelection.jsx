import React, { useEffect, useState } from 'react'
import { getseats, getseats2, getseats3, getseats4 } from '../../Services/GetSeats';
import "./SeatSelection.scss"



const SeatSelection = () => {
  const btn1 = [1, 2, 3, 4, 5]
  const btn2 = [6, 7, 8, 9, 10]
  const [showSeats, setShowSeats] = useState([]);
  const [showSeats2, setShowSeats2] = useState([]);
  const [showSeats3, setShowSeats3] = useState([]);
  const [showSeats4, setShowSeats4] = useState([]);
  const [color, setColor] = useState();
  // estado del asiento 
  const get1 = async () => {
    const seatsGet = await getseats('showSeats');
    setShowSeats(seatsGet);
  }
 showSeats.filter((item) => {
    const aiuda = item.status
    console.log(aiuda);
    if (aiuda === "available") {
      const handleClick = () => {
        setColor("white");
      }
      
    }
  });
  
  const style = {
    backgroundColor: color,

  };
  // puestosValidos();
  // console.log(puestosValidos);


  const get2 = async () => {
    const seatsGet2 = await getseats2('showSeats2');
    setShowSeats2(seatsGet2);
  }

  const get3 = async () => {
    const seatsGet3 = await getseats3('showSeats3');
    setShowSeats3(seatsGet3);
  }
  const get4 = async () => {
    const seatsGet4 = await getseats4('showSeats4');
    setShowSeats4(seatsGet4);
  }

  useEffect(() => {
    get1();
    get2();
    get3();
    get4();
  }, [])




  // const [color, setColor] = useState('rgb(192, 189, 189)');

  // const handleClick = () => {
  //   setColor(' rgb(161, 43, 136)');
  // }

  // const handleMouseUp = () => {
  //   setColor('red');
  // }

  // const style = {
  //   backgroundColor: color,

  // };

  // return (
  //   <button
  //     style={style}
  //     onClick={handleClick}
  //     onMouseUp={handleMouseUp}
  //   >
  //     Hola mundo
  //   </button>
  // );

  // const [seatse, setSeatse] = useState(get1);

  // const handleSeatClick = (seatId) => {
  //   setSeatse((prevSeats) => {
  //     return prevSeats.map((seat) => {
  //       if (seat.id === seatId) {
  //         return {
  //           ...seat,
  //           occupied: !seat.occupied,
  //         };
  //       }
  //       return seat;
  //     });
  //   });
  // };
  const [colorp, setColorp] = useState([]);;
  // const initialColor = 'white';

  useState(() => {
    setColorp(showSeats.map((item) => item.status === "available" ? 'white' :'rgb(192, 189, 189)'));
  }, []);

  // const handleClick = (index) => {
  //   const newColors = [...colorp];
  //   newColors[index] = newColors[index] === 'white' ? 'rgb(161, 43, 136)' : 'white';
  //   setColorp(newColors);
  // };
  // const handleClick = () => {
  //   if (colorp === initialColor) {
  //     setColorp('rgb(161, 43, 136)');
  //     console.log("hice clic")
  //   } else {
  //     setColorp(initialColor);
  //     console.log("hice clic else")
  //   }

  // };
  // const buttonStyle = {
  //   backgroundColor: colorp,
  // };
  return (
    <main >
      <span>Selecciona tus asientos</span>
      <div className='position'>
        <div className='position__superior'>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button className='empty'></button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
        </div>
      </div>
      <span className='text-center'>Salida rápida</span>
      <section className='seating1'>
        <div className='seats'>
          {
            showSeats.map((seats, index) =>
              <button key={seats.id} 
             
              //  style={{ backgroundColor: colorp }} onClick={handleClick}
                // onClick={handleClick}
                // onMouseUp={handleMouseUp}
                style={{
                  backgroundColor: seats.status === "available" ? 'white' :'rgb(192, 189, 189)', 
                  // ...buttonStyle
                }}
                // onClick={handleClick}
                >

                </button>
            )}
        </div>
        <article className='column-numeros'>
          {
            btn1.map((btn) =>
              <button>{btn}</button>
            )}
        </article>
        <div className='seats'>
          {
            showSeats3.map((seats3, index) =>
              <button key={seats3.id} style={{
                backgroundColor: seats3.status === "available" ? 'white' :'rgb(192, 189, 189)',
              }}></button>
            )}
        </div>
      </section>
      <span className='text-center'>Estándar</span>
      <section className='seating1'>
        <div className='seats'>
          {
            showSeats2.map((seats2, index) =>
              <button key={seats2.id} style={{
                backgroundColor: seats2.status === "available" ? 'white' :'rgb(192, 189, 189)',
              }}></button>
            )}
        </div>
        <article className='column-numeros'>
          {
            btn2.map((btn) =>
              <button>{btn}</button>
            )}
        </article>
        <div className='seats'>
          {
            showSeats4.map((seats4, index) =>
              <button key={seats4.id} style={{
                backgroundColor: seats4.status === "available" ? 'white' :'rgb(192, 189, 189)',
              }}></button>
            )}
        </div>
      </section>
    </main>
  )




}

export default SeatSelection