package expense.splitting.Expense.expenseGroup.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import expense.splitting.Expense.expenseGroup.entities.ExpenseGroup;

public interface ExpenseGroupRepo extends JpaRepository<ExpenseGroup, Long> {
	@Query("SELECT g FROM ExpenseGroup g WHERE g.groupName = :groupName")
	public ExpenseGroup getGroupByGroupName(@Param("groupName") String groupName);
	@Modifying
	@Transactional
	@Query("update ExpenseGroup set totalAmount = 0")
	public void resetTotalAmountOfGroup();
	@Modifying
	@Transactional
	@Query("update ExpenseGroup set avgAmount = 0")
	public void resetAvgAmountOfGroup();
	@Modifying
	@Transactional
	@Query(value = "TRUNCATE TABLE Expense", nativeQuery = true)
	public void settleAllExpenseFromFroup();

}
