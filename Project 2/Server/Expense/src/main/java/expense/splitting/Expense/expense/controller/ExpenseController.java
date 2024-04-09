package expense.splitting.Expense.expense.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import expense.splitting.Expense.expense.entities.Expense;
import expense.splitting.Expense.expense.services.ExpenseService;

@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "http://localhost:4200")

public class ExpenseController {
	@Autowired
	ExpenseService expenseService;
	
	@PostMapping(value = "/createExpense")
	public String createExpense(@RequestBody Expense newExpense) {
		
		return expenseService.createExpense(newExpense);
	}
	
	@GetMapping(value = "settleAll")
	public ResponseEntity<Object> settleAll(){
		expenseService.settleAllExpense();
		return new ResponseEntity<>(HttpStatus.OK);
		
	}


}
