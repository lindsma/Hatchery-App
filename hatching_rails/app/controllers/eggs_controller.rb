class EggsController < ApplicationController
  def create
    @egg = Egg.new egg_params
    if @egg.save
      result = {}
      result[:total] = @egg.total
      render json: result
    else
      result = {
        ok: false,
        error: @egg.error.full_messages
      }
      render json: { ok: false }, status: 422
    end
  end

  def show
    @show_eggs = Egg.total
    inventory = {}
    inventory[:total] = @show_eggs.total
    render json: inventory
  end

  def update(@egg)
    @users_get = @egg - params[:users_eggs]
  end

  private

  def egg_params
    params.require(:list).permit(:total)
  end
end
