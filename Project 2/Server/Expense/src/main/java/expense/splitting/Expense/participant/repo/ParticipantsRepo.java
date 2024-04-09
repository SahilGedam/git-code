package expense.splitting.Expense.participant.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import expense.splitting.Expense.participant.entities.Participants;

public interface ParticipantsRepo extends JpaRepository<Participants, Long> {
	@Query(value = "SELECT * FROM Participants p WHERE p.username = :username", nativeQuery= true)
	public Participants getParticipantByUsername(@Param("username") String username);
//
//	
	@Modifying 
	@Transactional
	@Query("update Participants set balAmount =0")
	public void resetBalAmountOfParticipant();
//	
//	
	@Modifying 
	@Transactional
	@Query("update Participants p set p.amount = 0 where p.participantId >= 0")
	public void resetAmountOfParticipant();


}
