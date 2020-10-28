import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'
import Sidebar from '../../components/Sidebar';


const Home = props=>{
    const gallaryHeight=450;
    const gallaryStyle={
        height: gallaryHeight+'px',
        overflow: 'hidden',
    }
    const slideImageHeight=gallaryHeight/3;
    return (
        <div>
           <Card style={{margin: '20px 0'}}>
               <div className='gallaryPost' style={gallaryStyle}>
               <section style={{width:'70%'}} >
                  <div>
                  <img src={require('../../blogPostImages/memories-from.jpg')} alt=""></img>
                  </div>
                </section>
                <section className='sideImageWrapper' style={{width:'30%'}}>
                <div  style={{height:`${slideImageHeight}px`}}>
                  <img src={require('../../blogPostImages/memories-from.jpg')} alt=""></img>
                  </div>
                  <div style={{height:`${slideImageHeight}px`}}>
                  <img src={require('../../blogPostImages/beautiful-&-simple.jpg')} alt=""></img>
                  </div>
                  <div style={{height:`${slideImageHeight}px`}}>
                  <img src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')} alt=""></img>
                  </div>
                </section>
               </div>
               
           </Card>
           <section className="HomeContainer">
                <div style={{width: '70%'}}>
                <Card style={{marginBottom:'20px'}}>
                  <div className="postImageWrapper">
                      <img src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')} alt=''></img>
                  </div>
                  <div style={{textAlign:'center'}}>
                      <span>Featured</span>
                      <h2>Fitness Mantra To live Life</h2>
                      <span>posted on July 21, 2016 by Sor Bloging Tips</span>
                      <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs...</p>
                      <button>Read More</button>
                  </div>
                  
                 </Card>
               
                </div>
                <Sidebar></Sidebar>
           </section>
           
        </div>
    )
}
export default Home