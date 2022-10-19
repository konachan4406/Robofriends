import React from 'react';
const Card = ({username,email,id})=> {
	
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5  '>
			<img alt ='robots' src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{username}</h2>
				<p>{email}</p>
			</div>
		</div>
		);	
}

export default Card;