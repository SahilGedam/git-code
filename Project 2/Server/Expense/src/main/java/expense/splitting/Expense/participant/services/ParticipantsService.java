package expense.splitting.Expense.participant.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import expense.splitting.Expense.expenseGroup.entities.ExpenseGroup;
import expense.splitting.Expense.expenseGroup.repo.ExpenseGroupRepo;
import expense.splitting.Expense.expenseGroup.services.ExpenseGroupService;
import expense.splitting.Expense.participant.entities.Participants;
import expense.splitting.Expense.participant.repo.ParticipantsRepo;

@Service
public class ParticipantsService {
	@Autowired
	ParticipantsRepo participantRepo;
	@Autowired
	ExpenseGroupRepo groupRepo;
	@Autowired
	ExpenseGroupService groupService;

	public String createParticipant(@RequestBody Participants newParticipant) {
		String newParticipantName = newParticipant.getUsername();
		if (participantRepo.getParticipantByUsername(newParticipantName) == null) {
			ExpenseGroup group = groupRepo.getGroupByGroupName(newParticipant.getGroupName());
			if (group != null) {
				group.setGroupMembers(group.getGroupMembers() + 1);
				if (group.getAvgAmount() != 0) {
					group.setAvgAmount(group.getTotalAmount() / group.getGroupMembers());
				}
				groupRepo.save(group);
				participantRepo.save(newParticipant);
				calculateBalanceOfParticipant(newParticipant.getUsername());
			} else {
				groupService.createGroup(newParticipant.getGroupName());
				participantRepo.save(newParticipant);
			}
			return "participant created";
		} else {
			return "participant exist";
		}

	}

	public List<Participants> getAllParticipants() {
		return participantRepo.findAll();
	}

	public Participants getParticipantByUsername(@PathVariable String username) {
		return participantRepo.getParticipantByUsername(username);
	}

	public void addExpenseOfParticipant(@RequestParam Long amount, @RequestParam String username) {
		Participants participant = participantRepo.getParticipantByUsername(username);
		participant.setAmount(participant.getAmount() + amount);
		participantRepo.save(participant);
	}

	public void calculateBalanceOfParticipant(@RequestParam String username) {
		Participants participantUpdated = participantRepo.getParticipantByUsername(username);
		ExpenseGroup group = groupRepo.getGroupByGroupName(participantUpdated.getGroupName());
		List<Participants> participantList = participantRepo.findAll();
		for (int i = 0; i < participantList.size(); i++) {
			Participants participant = participantList.get(i);
			if (participant.getGroupName().equals(group.getGroupName())) {
				participant.setBalAmount(group.getAvgAmount() - participant.getAmount());
				participantRepo.save(participant);
			}

		}

	}

}
