package expense.splitting.Expense.expense.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import expense.splitting.Expense.expense.entities.Expense;

public interface ExpenseRepo extends JpaRepository<Expense, Long> {

}
