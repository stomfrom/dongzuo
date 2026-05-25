import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *

leju_variable_x = None



def main():
    nodes.node_initial()
    try:


        leju_variable_x = get_key.key()
        if leju_variable_x == 246:
            base_action.action('抱块最终版')
        leju_variable_x = get_key.key()
        if leju_variable_x == 198:
            base_action.action('王土土土1')
        leju_variable_x = get_key.key()
        if leju_variable_x == 243:
            base_action.action('前倒地起身smart')
        leju_variable_x = get_key.key()
        if leju_variable_x == 244:
            base_action.action('后倒地起身smart')
        leju_variable_x = get_key.key()
        if leju_variable_x == 193:
            base_action.action('抱块前移最终版')
        leju_variable_x = get_key.key()
        if leju_variable_x == 196:
            base_action.action('左移测试1')
        leju_variable_x = get_key.key()
        if leju_variable_x == 195:
            base_action.action('测试2后移')
        leju_variable_x = get_key.key()
        if leju_variable_x == 194:
            base_action.action('右移测试1')
        leju_variable_x = get_key.key()
        if leju_variable_x == 197:
            base_action.action('左转最终版')
        leju_variable_x = get_key.key()
        if leju_variable_x == 200:
            base_action.action('右转最终版')
        leju_variable_x = get_key.key()
        if leju_variable_x == 199:
            base_action.action('侧上高台测试2')
        leju_variable_x = get_key.key()
        if leju_variable_x == 245:
            base_action.action('放块最终版')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
