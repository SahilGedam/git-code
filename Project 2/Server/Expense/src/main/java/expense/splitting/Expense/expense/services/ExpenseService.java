package expense.splitting.Expense.expense.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import expense.splitting.Expense.expense.entities.Expense;
import expense.splitting.Expense.expense.repo.ExpenseRepo;
import expense.splitting.Expense.expenseGroup.repo.ExpenseGroupRepo;
import expense.splitting.Expense.expenseGroup.services.ExpenseGroupService;
import expense.splitting.Expense.participant.repo.ParticipantsRepo;
import expense.splitting.Expense.participant.services.ParticipantsService;

@Service
public class ExpenseService {
	@Autowired
	ExpenseRepo expenseRepo;
	@Autowired
	ParticipantsService participantService;
	@Autowired
	ExpenseGroupService groupService;
	@Autowired
	ParticipantsRepo participantRepo;
	@Autowired
	ExpenseGroupRepo groupRepo;
	
	public String createExpense(@RequestBody Expense newExpense) {
//		String userNameOfExpense = newExpense.getUsername();
//		Participants participantOfExpense = participantRepo.getParticipantByUsername(userNameOfExpense);
//		String groupNameOfExpense = participantOfExpense.getGroupName();
		expenseRepo.save(newExpense);
		participantService.addExpenseOfParticipant(newExpense.getAmount(), newExpense.getUsername());
		groupService.updateTotalAmount(newExpense.getAmount(), newExpense.getGroupName());
		participantService.calculateBalanceOfParticipant(newExpense.getUsername());
		return "expense created";
	}

	public void settleAllExpense() {
//		groupRepo.truncateTableExpense();
//		groupRepo.truncateTableGroup();
//		groupRepo.truncateTableParticipant();
		
		participantRepo.resetAmountOfParticipant();
		participantRepo.resetBalAmountOfParticipant();
		groupRepo.resetTotalAmountOfGroup();
		groupRepo.resetAvgAmountOfGroup();
		groupRepo.settleAllExpenseFromFroup();
	}
}



