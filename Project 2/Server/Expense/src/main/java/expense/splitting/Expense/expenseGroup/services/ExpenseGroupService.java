package expense.splitting.Expense.expenseGroup.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import expense.splitting.Expense.expenseGroup.entities.ExpenseGroup;
import expense.splitting.Expense.expenseGroup.repo.ExpenseGroupRepo;

@Service
public class ExpenseGroupService {
	@Autowired
	ExpenseGroupRepo groupRepo;

	public List<ExpenseGroup> getAllGroups() {
		return groupRepo.findAll();
	}

	public void updateTotalAmount(@RequestParam Long amount, @RequestParam String groupName) {
		ExpenseGroup newGroup = groupRepo.getGroupByGroupName(groupName);
		long newTotalAmount = newGroup.getTotalAmount() + amount;
		newGroup.setTotalAmount(newTotalAmount);
		newGroup.setAvgAmount(newTotalAmount / newGroup.getGroupMembers());
		groupRepo.save(newGroup);
	}

	public void createGroup(@RequestBody String groupName) {
		ExpenseGroup group = new ExpenseGroup();
		group.setGroupName(groupName);
		group.setAvgAmount(0);
		group.setGroupMembers(1);
		group.setTotalAmount(0);
		groupRepo.save(group);
	}


}
