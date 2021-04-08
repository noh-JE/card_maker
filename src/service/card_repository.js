import firebaseApp from './firebase';

class CardRepository {
    syncCards(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshop => {
            const value = snapshop.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
    
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;