class UsersController < ApplicationController
  # before_action :authenticate

  def show
  end

  def new
    @user = User.new
  end

  def create
    binding.pry
    @user = User.new(
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    if @user.save
      render 'show.json.jbuilder', status: :created, location: @user
    else
      render_error @user.errors.full_message
    end
  end

  private
  def user_params
    params.require("users").permit(:username, :email, :password)
  end

  protected
  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(auth_token: token)
    end
  end
end
