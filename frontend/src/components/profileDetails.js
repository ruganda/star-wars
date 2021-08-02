import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { PeopleContext } from '../contexts/peopleContext';
import ProfileSkeleton from './profileSkeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10% auto 20% auto',
    boxShadow: 'rgb(31 31 31 / 12%) 0px 1px 6px, rgb(31 31 31 / 12%) 0px 1px 4px',
    padding: '20px'

  },
  avatar: {

    width: '10rem',
    height: '10rem',
    textAlign: 'center'
  },
  text: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '10px'
  },
  profileContainer:{
    width: '70%',
    height: '70%',
    backgroundColor: '#f1f5f8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20% auto'
  }
}));

export default function ProfileDetails(props) {
  const classes = useStyles();
  const { loading, error, people, setName } = useContext(PeopleContext);

  const name = props.match.params.name;

  useEffect(() => {
    setName(name)
    return () => {
      setName('')
    };
  }, []);

  const personData = people.length && people[0];

  console.log(personData, '--->')
  return (
    <div className={classes.profileContainer}>
      <h2> Profile Page</h2>
    {loading && <ProfileSkeleton classes={classes}/>}
    {!loading && !error && <Card className={classes.root}>
      <Avatar alt={personData.name} sizes={'large'} className={classes.avatar}>

      </Avatar>
      <div className={classes.text}> <strong>{`Name: ${ personData.name}`} </strong>  </div>
      <Typography className={classes.text}> {`Height: ${personData.height}`}</Typography>
      <Typography className={classes.text}> {`Mass: ${personData.mass}`}</Typography>
      <Typography className={classes.text}> {`Homeworld: ${personData.homeworld}`}</Typography>

    </Card>}
    </div>
  );
}

