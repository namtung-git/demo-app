import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import islandStore from './actions/store';

const styles = {
    button: {
        margin: '12px 0',

    },
    buttonSmall: {
        width: 'auto'
    }
}

function ComponentSwitcher() {
    const [islandState, setIslandState] = useState(islandStore.initialState);
  
    useEffect(() => {
      islandStore.getVillagers()

      islandStore.subscribe(setIslandState);
      islandStore.init();
    }, [])
  
    const messageNotification = islandState.newDataCount > 0
      && (<span className="notify"> ({islandState.newDataCount})</span>);

    return (
      <div className="switcher-div">
        <Link to="/add-villager"><button className="btn" style={{...styles.button, ...styles.buttonSmall}}>
          Add a villager to your island
        </button></Link>
        &nbsp;&nbsp;
        <Link to="/edit-villager"><button className="btn" style={{...styles.button, ...styles.buttonSmall}}>
          Edit villager profile
          {messageNotification}        
        </button></Link>
      </div>
    );
  }
  
  export default ComponentSwitcher;