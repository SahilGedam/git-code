package expense.splitting.Expense.participant.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import expense.splitting.Expense.participant.entities.Participants;
import expense.splitting.Expense.participant.services.ParticipantsService;
@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "http://localhost:4200")
public class ParticipantController {
	@Autowired
	ParticipantsService participantService;
	public String createParticipant(@RequestBody Participants newParticipant) {
		return participantService.createParticipant(newParticipant);
	}
	@GetMapping(value = "getAllPaticipant")
	public List<Participants> getAllParticipants() {
		return participantService.getAllParticipants();
	}
	
	@GetMapping(value = "getPaticipant/{username}")
	public Participants getParticipantByUsername(@PathVariable String username) {
		return participantService.getParticipantByUsername(username);
	}
}
