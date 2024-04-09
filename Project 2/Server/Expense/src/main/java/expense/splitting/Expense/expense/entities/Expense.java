package expense.splitting.Expense.expense.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "expense")
public class Expense {
	@Id
	@Column(name = "expense_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long expenseId;
	@Column(name = "expense_name")
	private String expenseName;
	@Column(name = "username")
	private String username;
	
	@Column(name = "group_name")
	private String groupName;
	private long amount;
	@Column(name = "expense_date")
	private String date;
	
	public Expense(long expenseId, String expenseName, String username, String groupName, long amount, String date) {
		super();
		this.expenseId = expenseId;
		this.expenseName = expenseName;
		this.username = username;
		this.groupName = groupName;
		this.amount = amount;
		this.date = date;
	}
	@Override
	public String toString() {
		return "Expense [expenseId=" + expenseId + ", expenseName=" + expenseName + ", username=" + username
				+ ", groupName=" + groupName + ", amount=" + amount + ", date=" + date + "]";
	}
	public long getExpenseId() {
		return expenseId;
	}
	public void setExpenseId(long expenseId) {
		this.expenseId = expenseId;
	}
	public String getExpenseName() {
		return expenseName;
	}
	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}
}


