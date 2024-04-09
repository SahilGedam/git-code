package expense.splitting.Expense.expenseGroup.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "expense_group")
public class ExpenseGroup {
	@Id
	@Column(name = "group_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long groupId;
	
	@Column(name = "group_name")
	private String groupName;
	
	@Column(name = "total_amount")
	private long totalAmount;
	@Column(name = "group_members")
	private long groupMembers;
	
	@Column(name = "avg_amount")
	private long avgAmount;
	
	
	

	public ExpenseGroup(long groupId, String groupName, long totalAmount, long groupMembers, long avgAmount) {
		super();
		this.groupId = groupId;
		this.groupName = groupName;
		this.totalAmount = totalAmount;
		this.groupMembers = groupMembers;
		this.avgAmount = avgAmount;
	}
	@Override
	public String toString() {
		return "Groups [groupId=" + groupId + ", groupName=" + groupName + ", totalAmount=" + totalAmount
				+ ", groupMembers=" + groupMembers + ", avgAmount=" + avgAmount + "]";
	}
	public long getGroupId() {
		return groupId;
	}
	public void setGroupId(long groupId) {
		this.groupId = groupId;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public long getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(long totalAmount) {
		this.totalAmount = totalAmount;
	}
	public long getGroupMembers() {
		return groupMembers;
	}
	public void setGroupMembers(long groupMembers) {
		this.groupMembers = groupMembers;
	}
	public long getAvgAmount() {
		return avgAmount;
	}
	public void setAvgAmount(long avgAmount) {
		this.avgAmount = avgAmount;
	}
	public ExpenseGroup() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
