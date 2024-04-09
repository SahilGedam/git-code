package expense.splitting.Expense.participant.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "participants")
public class Participants {
	@Id
	@Column(name = "participant_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long participantId;
	@Column(name = "username")
	private String username;
	@Column(name = "group_name")
	private String groupName;
	@Column(name = "amount")
	private long amount;
	
	@Column(name = "bal_amount")
	private long balAmount;
	
	public Participants(long participantId, String username, String groupName, long amount, long balAmount) {
		super();
		this.participantId = participantId;
		this.username = username;
		this.groupName = groupName;
		this.amount = amount;
		this.balAmount = balAmount;
	}
	@Override
	public String toString() {
		return "Participants [participantId=" + participantId + ", username=" + username + ", groupName=" + groupName
				+ ", amount=" + amount + ", balAmount=" + balAmount + "]";
	}
	public long getParticipantId() {
		return participantId;
	}
	public void setParticipantId(long participantId) {
		this.participantId = participantId;
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
	public long getBalAmount() {
		return balAmount;
	}
	public void setBalAmount(long balAmount) {
		this.balAmount = balAmount;
	}
	public Participants() {
		super();
		// TODO Auto-generated constructor stub
	}

}
