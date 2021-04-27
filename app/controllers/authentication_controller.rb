class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify
  def login
    @user = User.find_by(username: login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has secure password'
      token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("passowrd_digest"),
        toke: token
      }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  def verify
    render json: @current_user.attributes.except("password_digest")
  end

    private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
