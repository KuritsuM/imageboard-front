export default class ModeratorService {
    static isUserBoardModerator(userRoles, board) {


        return !!userRoles.find((element) => {
            return `ROLE_${board.toUpperCase()}` === element;
        });
    }
}