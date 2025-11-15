import { TodosContainer } from './components/TodosContainer/TodosContainer';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.app}>
            <TodosContainer />
        </div>
    );
};
