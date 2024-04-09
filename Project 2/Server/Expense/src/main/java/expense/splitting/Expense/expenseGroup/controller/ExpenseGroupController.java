package expense.splitting.Expense.expenseGroup.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import expense.splitting.Expense.expenseGroup.entities.ExpenseGroup;
import expense.splitting.Expense.expenseGroup.services.ExpenseGroupService;
@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "http://localhost:4200")

public class ExpenseGroupController {
	@Autowired
	ExpenseGroupService groupService;
	@GetMapping(value = "getAllGroups")
	public List<ExpenseGroup> getAllGroups() {
		return groupService.getAllGroups();
	}


}
