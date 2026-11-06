from flask import Blueprint, jsonify, request

from app.services.experiments_service import create_experiment

from app.repositories.experiment_repository import experiments
from app.utils.responses import error_response, success_response

experiments_bp = Blueprint("experiments", __name__, url_prefix="/api/experiments")


@experiments_bp.route("/", methods=["GET"])
def get_experiments():

    return jsonify(experiments)


@experiments_bp.route("/<int:experiment_id")
def get_experiments(experiment_id):
    experiment = None

    if experiment is None:
        return error_response("EXPERIMENT_NOT_FOUND", "Experiment not found", 404)

    return success_response(experiment)


# 실무에서는 라우트 함수에 모든 코드 작성 X
# 예를 들어 다음과 같은 코드는 피하는 것이 좋다.
# @experiments_bp.route("/", methods=["POST"])
# def create_experiments():
#     data = request.get_json()

#     # 데이터 검증
#     # DB 연결
#     # 데이터 저장
#     # 학습 실행
#     # 결과 계산
#     # 응답 생성

#     return jsonify({"success": True})


# Routes / Controllers - HTTP 요청, 파라미터 검증, HTTP 응답
# Services - 비즈니스 로직, 실험 제어, 학습 관리
# Repositories - DB 접근, 데이터 조회 및 저장
# DB - 실제 데이터 저장소


@experiments_bp.route("/", methods=["POST"])
def create():
    data = request.get_json()

    result = create_experiment(data)

    return jsonify(result), 201
