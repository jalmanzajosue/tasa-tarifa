import { Typography, Button, Link } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../store/slices/counter/counterSlice';
import { Link as RouterLink } from 'react-router-dom'



export const JournalPage = () => {

  const {counter} = useSelector((state: any) => state.counter)
  
  const dispatch = useDispatch()


  return (
    <>
    <JournalLayout>
    <Typography >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati sequi atque porro perspiciatis necessitatibus delectus id laboriosam saepe, est beatae suscipit ipsam ullam, alias, quod illo sunt officia eius.</Typography>

    <Link component={RouterLink} color='inherit' to="/auth/register" >
                Crear una cuenta

              </Link>

    <Button
  onClick={() => {
    dispatch(increment())
  }}
>
  Click me{counter}
</Button>



    </JournalLayout>

    </>
  )
}
