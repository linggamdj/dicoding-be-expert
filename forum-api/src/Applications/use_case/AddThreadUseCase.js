const NewThread = require('../../Domains/threads/entities/NewThread');

class AddThreadUseCase {
  constructor({ threadRepository, authenticationTokenManager }) {
    this._threadRepository = threadRepository;
    this._authenticationTokenManager = authenticationTokenManager;
  }

  async execute(useCasePayload, headerAuth) {
    const newThread = new NewThread(useCasePayload);
    await this._authenticationTokenManager.verifyAccessToken(accessToken);
    return this._threadRepository.addThread(newThread);
  }
}

module.exports = AddThreadUseCase;
