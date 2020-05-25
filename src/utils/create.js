import Vue from 'vue'
import noticeComponent from "@/components/LysNotice/Notice";
export default function create(props) {
    const vm = new Vue({
        render(h) {
            return h(noticeComponent, {props})
        }
    }).$mount()

    document.body.appendChild(vm.$el)
    setTimeout(() => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }, 2000);
    // const comp = vm.$children[0];
    // comp.remove = function() {
    //     document.body.removeChild(vm.$el)
    //     vm.$destroy()
    // }
    // return comp
}