import {MainLayout} from "../components/MainLayout";
import classes from '../styles/error.module.css';

export default function Error () {
  return (
    <MainLayout title="Error">
      <h1 className={classes.error}>Error 404</h1>
    </MainLayout>
  )
}