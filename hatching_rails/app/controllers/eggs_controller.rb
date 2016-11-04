class EggsController < ApplicationController
  def create
    @egg = Egg.new(total: params[:input].to_i)
    if @egg.save
      result = {}
      result[:total] = @egg.total
      render json: result
    else
      result = {}
      render json: result
    end
  end

  def show
    @egg = Egg.where(id: 1).first
    inventory = {}
    inventory[:total] = @egg.total
    render json: inventory
  end

  def update
    if current_user.admin true
      @egg = Egg.where(id: 1).first
      @egg.total = @egg.total + params[:input].to_i
      @egg.save
      edited = {}
      edited[:total] = @egg.total
      edited[:user_eggs] = 0
      render json: edited
    else
      @egg.total = @egg.total - params[:input].to_i
      if @egg.user_eggs != Integer
        @egg.user_eggs = params[:input].to_i
        @egg.save
      else
        @egg.user_eggs + params[:input].to_i
        @egg.save
      end
      edited = {}
      edited[:total] = @egg.total
      edited[:user_eggs] = @egg.user_eggs
      render json: edited
    end
  end

  private

  def egg_params
    params.require(:egg).permit(:total)
  end
end
