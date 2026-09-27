import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  totalSeconds: number;
  running: boolean;
  onComplete?: () => void;
  onToggle: () => void;
};

export function DrillTimer({ label, totalSeconds, running, onComplete, onToggle }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    setRemaining(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          onComplete?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, remaining, onComplete]);

  const pct = totalSeconds > 0 ? remaining / totalSeconds : 0;
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.time}>
        {mins}:{secs.toString().padStart(2, '0')}
      </Text>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${pct * 100}%` }]} />
      </View>
      <Pressable style={styles.btn} onPress={onToggle}>
        <Text style={styles.btnText}>{running ? 'Pause' : remaining === 0 ? 'Reset' : 'Start'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#1a2236',
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  label: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  time: {
    color: '#f8fafc',
    fontSize: 36,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  barTrack: {
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#6366f1',
  },
  btn: {
    marginTop: 4,
    backgroundColor: '#4338ca',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
