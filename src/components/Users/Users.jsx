import React from 'react';
import s from './Users.module.css'

let Users = (props) => {

    props.setUsers([

        {
            id: 1,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Andrey',
            status: 'I\'m a boss!',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 2,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Nikolay',
            status: 'Sorry, but I\'m a boss too',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: true,
            fullName: 'Taras',
            status: 'Hello World!',
            location: {
                city: 'Poltava',
                country: 'Ukraine'
            }
        },
        {
            id: 4,
            photoUrl: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/79734556_773007619868345_7658556988103589888_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=P95JKNDm0doAX-gRa-5&oh=2c34ee00fa4bcc72aee14fb421c8cc74&oe=5E9F18D1',
            followed: false,
            fullName: 'Denis',
            status: 'I\'m a Boss!',
            location: {
                city: 'Kharkiv',
                country: 'Ukraine'
            }
        }
    ])

    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.postsBlock}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt={'avatar'} className={s.avatar} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;