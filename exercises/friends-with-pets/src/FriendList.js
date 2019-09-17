import React from 'react';
import Friend from './Friend.js'

const FriendList = props => {
    const { friends } = props

    const mappedFriends = friends.map(friend => 
                                        <Friend 
                                            name={friend.name} 
                                            age={friend.age} 
                                            pets={friend.pets} 
                                            key={Math.random()}
                                        />)
    return (
        <div>
            { mappedFriends }
        </div>
    )
}

export default FriendList