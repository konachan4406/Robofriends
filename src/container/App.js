import React ,{ Component } from 'react'
import CardList from '../component/CardList'
import Searchbox from '../component/searchbox'
import Scroll from '../component/Scroll'
import Error from '../component/ErrorBoundary'
import './App.css'

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({robots:users}))
		}
	onSearchChange = (event)=>{
		this.setState({ searchfield: event.target.value})
}
	render(){
			const {robots , searchfield} = this.state
				const filteredrobots = robots.filter(robots =>{
			return robots.username.toLowerCase().includes(searchfield.toLowerCase())
		})
	return (
		<div className='tc'>
			<h1 className='f1 dib shadow-5 br3 pa3 ma2 '>RoboFriends</h1>
			<Searchbox searchChange={this.onSearchChange}/>
			<Scroll>
				<Error>
			   		< CardList robots ={filteredrobots} />
			   	</Error>
			</Scroll>
		</div>
	)
  }
}
export default App;